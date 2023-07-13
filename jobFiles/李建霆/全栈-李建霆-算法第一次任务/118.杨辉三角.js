/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ret = [];
  for (let i = 0; i < numRows; i++) {
    const row = Array(i + 1).fill(1); //将行内数组全部用1填充；
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j]; //第n行第j个数等于第n-1行第j-1个数加第j个数
    }
    ret.push(row);
  }
  return ret;
};        
// @lc code=end
                                                                                                                                                                                                                            