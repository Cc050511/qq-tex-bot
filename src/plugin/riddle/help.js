const helpDict = {
  '露春': '谜面不露春，是指谜面上不会出现谜底的任何一个字。谜目则无此限制，可以出现谜底中的字',
  '探骊格': '探骊格如同深海探宝，不指定谜目，要求将谜目谜底一起猜出，谜目谜底连起来与谜面相扣',
  '卷帘格': '卷帘格，意为『倒卷珠帘』，要把谜底倒过来读，如谜底是『孙行者』，则要读作『者行孙』',
  '离合字': '离合字是将一个字拆成多个部件，如：好女子、弓长张',
  '空格': '谜底为多个组合时用空格隔开，如：中秋 端午',
  '梨花格': '梨花格是谐音格，可以放心使用谐音梗',
  '徐妃格': '取『只得徐妃半面妆』之意，去掉谜底相同的偏旁',
  '摘匾格': '类似徐妃格，去掉谜底相同的部首',
  '白头格': '首字谐音',
  '折巾格': '将谜底第一字左右拆开成两个字，只取其半边字连下文来读',
  '蜂腰格': '蜂腰格，又名中分格、断绵格。谜底须三字以上的单数词句，但中间一字要上下分开作两字读',
}
helpDict['中分格'] = help['断绵格'] = help['蜂腰格']

module.exports = helpDict
