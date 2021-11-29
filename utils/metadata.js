const axios = require('axios');
const cheerio = require('cheerio');

exports.getTitleOrNULL = async (originalUrl) => {
    const res = await axios.get(originalUrl).catch((error) => {
        if (error.response) {
            //console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
    if (res === undefined)
        return null;
    console.log(res);
    const {data} = res;
    console.log("getTitle");
    const $ = cheerio.load(data);
    const title = $('head').find('title').text().trim();
    console.log("title");
    console.log(title);
    return title;
}

exports.getMetaDataList = async (originalUrl) => {
    const res = await axios.get(originalUrl);
    const {data} = res;
    console.log(data);
    const $ = cheerio.load(data);
    // metadata 처리하는 모듈에서 사용함
    // 이부분 앞으로 구현할 부분
};

