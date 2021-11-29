/* eslint-disable no-undef */
const mongoose = require('mongoose');
const titleService = require('../services/urls.title.service');
const urlsService = require('../services/urls.service');
const emojiService = require('../services/urls.emoji.service');
const Urls = require('../models/urls');

mongoose.connect('mongodb://localhost/url-shortener');



describe('하나의 https url에대해서', () => {
    afterEach(async () => {
      await Urls.remove({});
    });
    const url = "https://docs.github.com/en/actions";
    test('simple test', async () => {
        const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url);
        const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('emoji test', async () => {
      const convertedUrl  = await emojiService.getConvertedEmojiUrlOrNULL(url);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });

    test('custom test', async () => {
      const custom = "custom";
      const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url, custom);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
    
    test('title test', async () => {
      const convertedUrl  = await titleService.getConvertedTitleUrlOrNULL(url);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
  }
);

////////////////////////////////////////////////////////////////////////////////


describe('하나의 http url에대해서 case1', () => {
  afterEach(async () => {
    await Urls.remove({});
  });
  
    const url = "http://www.naver.com/";
    test('simple test', async () => {
        const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url);
        const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('emoji test', async () => {
      const convertedUrl  = await emojiService.getConvertedEmojiUrlOrNULL(url);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });

    test('custom test', async () => {
          const custom = "ccustom";
          const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url, custom);
          const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });

    test('title test', async () => {
          const convertedUrl  = await titleService.getConvertedTitleUrlOrNULL(url);
          const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });
  }
);

// ////////////////////////////////////////////////////////////////////////


describe('하나의 http url에대해서 case2', () => {
  afterEach( async () => {
    await Urls.remove({});
  });
  
    const url = "http://www.nspna.com/news/?mode=view&newsid=539519";
    test('simple test', async () => {
      const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
    test('emoji test', async () => {
          const convertedUrl  = await emojiService.getConvertedEmojiUrlOrNULL(url);
          const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
      });
    test('custom test', async () => {
          const custom = "cccustom";
          const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url, custom);
          const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
        });
    test('title test', async () => {
          const convertedUrl  = await titleService.getConvertedTitleUrlOrNULL(url);
          const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });
  }
);


////////////////////////////////////////////////////////////////////////////////



describe('없는 site 형식에 대해서 정상작동하는가?', () => {
  afterEach(async() => {
    await Urls.remove({});
  });  
  
  const url = "swtpumpkin/node-githubActions-CI";
      test('simple test', async () => {
        const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url);
        const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('emoji test', async () => {
        const convertedUrl  = await emojiService.getConvertedEmojiUrlOrNULL(url);
        const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('Custom test', async () => {
      const custom = "custom";
      const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url, custom);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });

    test('title url', async () => {
      const custom = "custom";
      const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url, custom);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
  }
);


describe('매우긴 url에서의 작동', () => {
  afterEach( async() => {
    await Urls.remove({});
  });
  
  const url = "https://www.google.com/search?q=%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84&sxsrf=AOaemvJjS3mxF0LMC15ItKD64ei8OcuHeQ%3A1637904355174&ei=42-gYaSMCo78wQOSqYnoAQ&ved=0ahUKEwjkiZCapbX0AhUOfnAKHZJUAh0Q4dUDCA4&uact=5&oq=%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABADOggILhCABBCxAzoICAAQgAQQsQM6CwgAEIAEELEDEIMBOgUILhCABEoECEEYAVCDCVj9JGD0JWgGcAB4A4ABrwGIAfEJkgEDMS44mAEAoAEBoAECwAEB&sclient=gws-wiz";
  test('simple test', async () => {
    const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url);
    const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
    expect(orl).toBe(url);
  });
  test('emoji test', async () => {
      const convertedUrl  = await emojiService.getConvertedEmojiUrlOrNULL(url);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
  });
  test('custom test', async () => {
      const custom = "custom";
      const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url, custom);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
    test('title test', async () => {
      const convertedUrl  = await titleService.getConvertedTitleUrlOrNULL(url);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
  });
  }
);



// // 8. converted to original 저격 케이스
// // - test url : https://docs.github.com/en/actions 을 actions 로 custom ~/actions
// // - converted url로  https://docs.github.com/en/actions 을 제출시 맨끝 '/' actions  만 추출해서 reject되어야하는것이 값이 나오는지를 테스트.


describe(' converted to original 저격 케이스', () => {
  afterEach( async() => {
    await Urls.remove({});
  });
  
  const url = "https://docs.github.com/en/actions";
  const custom = "actions"

  test('custom test', async () => {
      const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url, custom);
      const orl  = await urlsService.getOriginalUrlOrNULL(url)
      expect(orl).toBe(null);
    });
  }
);
