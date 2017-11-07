/**
 * Created by Administrator on 2017/11/7.
 */
var express = require('express');
var router = express.Router();

// ��·��ʹ�õ��м��
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// ������վ��ҳ��·��
router.get('/', function(req, res) {
    res.send('Birds home page');
});
// ���� about ҳ���·��
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports = router;