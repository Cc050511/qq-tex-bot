module.exports = {
  小编体: {
    argc: 3,
    template: a => `${a[0]}${a[1]}是怎么回事呢？${a[0]}相信大家都很熟悉，但是${a[0]}${a[1]}是怎么回事呢，下面就让小编带大家一起了解吧。

${a[0]}${a[1]}，其实就是${a[2]}，大家可能会很惊讶${a[0]}怎么会${a[1]}呢？但事实就是这样，小编也感到非常惊讶。

这就是关于${a[0]}${a[1]}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！`,
    help: `用法:
/小编体 主语 谓语 换种说法
如:
/小编体 数学 是人类的发明还是发现 数学是否为人类所创造`,
  },
  你说的对: {
    argc: 8,
    template: a => `你说的对，但是《${a[0]}》是由${a[1]}自主研发的一款全新${a[2]}游戏。游戏发生在一个被称作「${a[3]}」的幻想世界，在这里，你将扮演一位名为「${a[4]}」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的${a[5]}们，和他们一起${a[6]}——同时，逐步发掘「${a[7]}」的真相。`,
    help: `用法:
/你说的对 游戏名 游戏作者 游戏类别 游戏世界 玩家名字 NPC名字 一起做的事 待发掘的真相
如:
/你说的对 Nazo_Game 高材生 yy 互联网 猫娘 大佬 发电 卖弱`,
  },
  不得不说: {
    argc: 1,
    template: a => `不得不说，${a[0]}是真的漂亮，气质出众，魅力十足，尤其是那双眼睛，不多不少，正好两个。而且那鼻子也生的甚是奇妙，不偏不倚，正好在脸中间 还有那个嘴巴，不多不少，正好一个。这五官，简直长得真是五官。还有这个头不歪不斜刚刚长在脖子上。还有那鼻孔，不多不少，正好两个。`,
    help: `用法: /不得不说 名字`,
  },
  要成为: {
    argc: 1,
    template: a => `无知时诋毁${a[0]}，懂事时理解${a[0]}，成熟时要成为${a[0][0]}友！ 越了解${a[0]}就会把它当成在黑夜一望无际的大海上给迷途的船只指引的灯塔，在烈日炎炎的夏天吹来的一股风，在寒风刺骨的冬天里的燃起的篝火！`,
    help: `用法:
/要成为 事物
如:
/要成为 数学`,
  },
  差不多得了: {
    argc: 5,
    template: a => `${a[0]}怎么你了？差不多得了😅屁大点事都要拐上${a[0]}，${a[0]}一没招你惹你，二没干伤天害理的事情，到底怎么你了让你一直无脑抹黑，${a[1]}每天费尽心思的文化输出弘扬${a[2]}，你这种喷子只会在网上敲键盘诋毁良心${a[3]}，${a[4]}的未来就是被你这种人毁掉的😅`,
    help: `用法:
/差不多得了 事物 名字 某某文化 公司或团体 某某圈某某界
如:
/差不多得了 数学 数学壬 数学文化 数学壬 数学界`,
  },
  中老年人玩: {
    argc: 1,
    template: a => `我们中老年人玩${a[0]}，并不是想要图什么，也不是完全为了消磨时光，我们是在追随时代的脚步，展示真实的自我 留下美好的回忆。我们虽然已经不再年轻，但是我们有一颗永远年轻的心，与君共勉，亲人们😊😊😊`,
    help: `用法: /中老年人玩 游戏名`,
  },
  我哭: {
    argc: 1,
    template: a => `我哭，我的${a[0]}啊！我的桃源般的${a[0]}……你是爱，是海洋……是月光……是温柔！那么坚强。又强大。又动人……意想不到地坚强，又苦，那么美好！我不愿再流泪。我看一千遍。${a[0]}……${a[0]}……`,
    help: `用法: /我哭 名字`,
  },
  可以骗: {
    argc: 1,
    template: a => `骗${a[0]}可以，别把你自己也骗到了就行。${a[0]}被你骗了真无所谓的，打个哈哈就过了。但希望你打完这段话后擦一下眼角，别让眼泪掉在手机屏幕上了就行。你说的这些话，${a[0]}信一下也是没什么的。还能让你有个心里安慰，但这种话说出来骗骗${a[0]}就差不多得了，${a[0]}信你一下也不会少块肉，但是你别搞得自己也当真了就行。${a[0]}被你骗一下是真无所谓的，${a[0]}笑笑也就过去了。真不是${a[0]}想要破你防，你擦擦眼泪好好想想，除了${a[0]}谁还会信你这些话?`,
    help: `用法:
/可以骗 名字
如:
/可以骗 哥们`,
  },
  求你们别发了: {
    argc: 0,
    template: a => `我几乎都快羡慕得疯了，倒在床上蒙住被子就开始抱着枕头尖叫流泪，嘴里一边喊着卧槽卧槽，一边又忍着，我边发边哭，打字的手都是抖的，后来我的手抖得越来越厉害，从心头涌起的思想、情怀和梦想，这份歆羡和悔恨交织在一起，我的笑还挂在脸上，可是眼泪一下子就掉下来了。求你了别发了，我生活再难再穷我都不会觉得难过，只有你们发这种东西的时候，我的心里像被刀割一样的痛，打着字泪水就忍不住的往下流`,
    help: `用法: /求你们别发了`,
  },
  内库: {
    argc: 1,
    template: a => `${a[0]}，你内库是什么颜色？虽然听起来很唐突，甚至有些失礼，但请允许我解释一下。
人类对于美丽的事物总是充满求知欲，在身心都被你俘获之后，却依旧愿意更深地了解你，这种品格很难不为之称赞。
所以，我不得不再提出这个问题：你的内库是什么颜色？可惜囿（you）于认知水平的局限，只能停留在想象。
是紫色的吗？像是普罗旺斯盛开的薰衣草花海般芬芳。
是红色的吗？如罗曼尼红酒灌溉的长河一样纯粹馥（fu）郁。
是白色的吗？宛如鸢尾花在法兰西王室旗帜上圣洁绽放。
......
哦，你内库的颜色。
还有什么能比你牵起我更深的惆怅？
你像是拉普兰的极光，如梦荡漾。
你像是哈雷彗星的锋芒，璀璨辉煌。
你像是朦胧晨曦的登场，耀眼明亮。`,
    help: `用法:
/内库 名字 `,
  },
}
