import { shadeBlendConvert, calculateBestTextColor } from "./index";

describe('color-utils', () => {
  it("should take the color #83fc8f and darken it by 10%", () => {
    expect(shadeBlendConvert("#83fc8f", -10)).toEqual("#6ae376");
  });
  
  it("should take the color #fc83d3 and lighten it by 19%", () => {
    expect(shadeBlendConvert("#fc83d3", 19)).toEqual("#ffb3ff");
  });
  
  it("should take the color #eeeeee and get its best text color", () => {
    expect(calculateBestTextColor("#eeeeee")).toEqual("#000000");
  });
  
  it("should take the color #f62459 and get its ideal text color", () => {
    expect(calculateBestTextColor("#f62459")).toEqual("#FFFFFF");
  });
});
