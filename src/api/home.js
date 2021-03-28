/*
 * @Descripttion: 
 * @version: 
 * @Author: Remons
 * @Date: 2021-02-22 20:08:23
 * @LastEditors: Remons
 * @LastEditTime: 2021-03-28 19:09:08
 */
import req from "../axios";
let service = req.service;
const HOME = {
  getFileOption(name) {
    return service({
      url: `/summarize/html/${name}.html`,
      method: "get"
    });
  },
  getMenuOption(name) {
    return service({
      url: `/summarize/website/data/${name}.xlsx`,
      method: "get",
      responseType: 'arraybuffer',
    });
  },
  getDocList(){
    return service({
      url: `/summarize/website/data/documentsNameList.json`,
      method: "get",
    });
  }


}

export default HOME