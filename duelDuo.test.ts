import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("Scoreboard show up when the page loads", async () => {
  const wins = await driver.findElement(By.id("wins"));
  const losses = await driver.findElement(By.id("losses"));
  const winsDisplayed = await wins.isDisplayed();
  const lossesDisplayed = await losses.isDisplayed();
  expect(winsDisplayed && lossesDisplayed).toBe(true);
});

test("Clicking Draw button displayes the div with id = choices", async () => {
  const button = await driver.findElement(By.id("draw"));
  button.click();
  const choices = await driver.findElement(By.id("choices"));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});
