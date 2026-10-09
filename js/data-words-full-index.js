/* 各模块全量词表清单（自动生成，请勿手改）
 *
 * 作用：① 首屏在词表文件尚未下载时也能显示正确的词数；② 告诉加载器该取哪个文件。
 *       n = 构建时从产物文件里**实测**出来的词数，与文件内登记的 actual 天生一致；
 *       _tools/verify-levels.js 把 n === actual 作为硬断言，兜住手工改产物文件这种意外。
 * 生成脚本：_tools/_build-index.js（须在 _build-level-full.js 与 _build-lv6-v4.js 之后运行）
 */
window.WORD_FULL_INDEX = {
  "primary": { file: "js/data-words-full-primary.js", n: 764, kb: 181 },
  "junior": { file: "js/data-words-full-junior.js", n: 2654, kb: 637 },
  "senior": { file: "js/data-words-full-senior.js", n: 5366, kb: 1343 },
  "cet4": { file: "js/data-words-full-cet4.js", n: 4474, kb: 1257 },
  "cet6": { file: "js/data-words-full-cet6.js", n: 4342, kb: 1331 },
  "kaoyan": { file: "js/data-words-full-kaoyan.js", n: 4999, kb: 1400 },
  "ielts": { file: "js/data-words-full-ielts.js", n: 5214, kb: 1342 }
};
