const { succeed, fail, start } = require('../../step/step_instance.js');
const { currentPage, getElementHandle } = require('./helpers.js')
const Puppeteer = require('./puppeteer.js')
const { writeFile  } = require('fs/promises')
const path = require('path')

async function navigate(browser, stepInstance) { 
  url = stepInstance.attrs.page.url

  const page = await currentPage(browser)
  await page.goto(url) 
  return stepInstance
}

async function click(browser, stepInstance) {
  selector = stepInstance.attrs.element.selector
  strategy = stepInstance.attrs.element.strategy.name

  let handle = await getElementHandle(browser, selector, strategy)
  await handle.click()
  return stepInstance
}

async function setValue(browser, stepInstance) {
  selector = stepInstance.attrs.element.selector
  strategy = stepInstance.attrs.element.strategy.name
  text = stepInstance.attrs.text

  let handle = await getElementHandle(browser, selector, strategy)
  await handle.type(text);
  return stepInstance
}

async function setSize(browser, stepInstance) {
  width = stepInstance.attrs.width
  height = stepInstance.attrs.height

  page = await currentPage(browser)
  await page.setViewport({
    width: width,
    height: height,
    deviceScaleFactor: 1,
  })
  return stepInstance
}

async function elementScreenshot(browser, stepInstance) {
  const selector = stepInstance.attrs.element.selector
  const strategy = stepInstance.attrs.element.strategy.name
  const file_name = stepInstance.attrs.process.name + " " + stepInstance.attrs.order + ".png"

  await new Promise(resolve => setTimeout(resolve, 500));
  const filePath = path.join(userdocs.configuration.image_path, file_name)

  let handle = await getElementHandle(browser, selector, strategy)
  if (!handle) raise("Element not found, couldn't take the screenshot.  Check the selector on the element for this step.")

  let base64 = await handle.screenshot({ path: filePath, encoding: "base64"});
  if (stepInstance.attrs.screenshot === null) { 
    stepInstance.attrs.screenshot = { base64: base64}
  } else {
    stepInstance.attrs.screenshot.base64 = base64
  }
  try {
    writeFile(filePath, base64, 'base64', function(err) {
      console.log(err);
    });
  } catch(error) {
    console.log(error)
  }
  return stepInstance
}

async function fullScreenScreenshot(browser, stepInstance) {
  const file_name = stepInstance.attrs.process.name + " " + stepInstance.attrs.order + ".png"
  const filePath = path.join(userdocs.configuration.image_path, file_name)
  const page = await currentPage(browser)

  await new Promise(resolve => setTimeout(resolve, 500));   

  let base64 = await page.screenshot({ encoding: "base64" });  

  if (stepInstance.attrs.screenshot === null) { 
    stepInstance.attrs.screenshot = { base64: base64}
  } else {
    stepInstance.attrs.screenshot.base64 = base64
  }
  try {
    writeFile(filePath, base64, 'base64', function(err) {
      console.log(err);
    });
  } catch(error) {
    console.log(error)
  }
  return stepInstance
}

async function clearAnnotations(browser, stepInstance) {
  const page = await currentPage(browser)
  page.evaluate(() => {
    for (let i = 0; i < window.active_annotations.length; i++) {
      document.body.removeChild(window.active_annotations[i]);
    }
    window.active_annotations = []
  })
  return stepInstance
}

async function applyAnnotation(browser, stepInstance, applyAnnotationFunction) {
  //console.log("apply Annotation " + stepInstance.attrs.annotation.annotation_type.name)
  let page = await currentPage(browser) 
  const preloadStatus  = await Puppeteer.hasPreloads(browser)
  if ( !preloadStatus ) { browser = await Puppeteer.preload(browser) }
  try {
    const result = await page.evaluate(applyAnnotationFunction, stepInstance)
    if (result == true) {
      return stepInstance
    } else {
      throw result
    }
  } catch (error) {
    throw error
  }
}

async function scrollIntoView(browser, stepInstance) { 
  selector = stepInstance.attrs.element.selector
  strategy = stepInstance.attrs.element.strategy.name

  const page = await currentPage(browser)
  let handle = await getElementHandle(browser, selector, strategy)
  if (handle != undefined) {
    await page.evaluate(handle => { handle.scrollIntoView() }, handle) 
    return stepInstance
  } else {
    throw new Error("Element not found")
  }
}

async function startProcess(window, stepInstance) { 
  window.webContents.send('processStatusUpdated', start(stepInstance))
  return stepInstance
}

async function completeProcess(window, stepInstance) { 
  window.webContents.send('processStatusUpdated', succeed(stepInstance))
  return stepInstance
}

module.exports.navigate = navigate
module.exports.click = click
module.exports.setValue = setValue
module.exports.setSize = setSize
module.exports.elementScreenshot = elementScreenshot
module.exports.fullScreenScreenshot = fullScreenScreenshot
module.exports.clearAnnotations = clearAnnotations
module.exports.applyAnnotation = applyAnnotation
module.exports.startProcess = startProcess
module.exports.completeProcess = completeProcess
module.exports.scrollIntoView = scrollIntoView