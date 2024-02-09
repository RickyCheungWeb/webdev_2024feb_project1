import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ChineseIntro = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      className='text-xl md:flex-row flex flex-col mx-auto w-5/6 items-center justify-center md:h-5/6 mb-40'
    >
      {/* HEADER */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='md:my-5 md:w-3/5'
      >
        <div className='mt-64'>
          <HText>教会简况 (Our Church)</HText>
        </div>
        <h3 className='font-semibold mt-6 text-2xl'>
          Welcome to West Ryde Anglican Church 欢迎来到西莱德圣公会教会
        </h3>
        <p className=' mt-6 mb-12'>
          <ul className='mt-6 list-disc space-y-2 px-10'>
            <li>在我们教会 将有人协助您阅读并了解圣经内容。</li>
            <li>您可以提问、寻找答案并探究神说这些话的意义。</li>
            <li>这里像个大家庭一样，来自不同国家和背景的弟兄姐妹 彼此照顾。</li>
            <li>这里欢迎小朋友，且提供安全的环境让孩子们从玩乐中学习。</li>
            <li>
              当您将自己交给主耶稣展开新生活，并跟上帝我们天上的父之间建立属于您个人的关系时，您会体验到前所未有的宁静、希望及爱。
            </li>
          </ul>
        </p>
        <h2 className='font-semibold mt-6 text-4xl'>教会聚会</h2>
        <p className=' mt-6 mb-12'>
          欢迎您和您的家人参与教会的各項聚会：
          <ul className='mt-6 list-disc space-y-2 px-10'>
            <li>周日主日聚会（Sunday Services)</li>
            <li>华话晚餐 (Mandarin-Speakers Dinner)</li>
            <li> 圣经导读 (Introduction to Bible)</li>
            <li> 周间查经小组 (Weekday Bible Study)</li>
            <li>幼儿游戏组 (Kids Club)</li>
            <li>周五课后活动 (Friday After School Activities)</li>
          </ul>
        </p>
        <h2 className='font-semibold mt-6 text-4xl'>
          周日主日聚会（Sunday Services)
        </h2>
        <h3 className='font-semibold mt-6 text-2xl'>
          每周日早上十点是家庭主日崇拜时间。
        </h3>
        <p className=' mt-6 mb-12'>
          期间以唱歌、读圣经并解释圣经，以及祷告的方式进行。
          同时，教会也有针对六个月以上、十三岁以下孩子设计了儿童主日学。
          另外，教会也会在春节和中秋节当周的周日举办特别庆祝活动。除此之外，教会在每周日早上八点和傍晚六点也有
          主日崇拜。
        </p>
        <h2 className='font-semibold mt-6 text-4xl'>
          华话晚餐 (Mandarin-Speakers Dinner)
        </h2>
        <p className=' mt-6 mb-12'>
          教会每学期举办两次普通话晚餐聚会。
          聚会时间是周六晚上六点，地点是在教会红厅。
          参加的人/家庭带一份菜肴来分享。
          餐后有一些有趣的活动，也会观看介绍基督教的中文短片，结束后有讨论及问答时间。
        </p>
        <h2 className='font-semibold mt-6 text-4xl'>
          圣经导读 (Introduction to Bible)
        </h2>
        <p className=' mt-6 mb-12'>
          在过去三年里，圣经导读已帮助不少对基督教毫无或仅有少许概念的人。
          通过圣经导读的七堂课，您可以了解到圣经里关于耶稣及您的生活的主要教导。
          课堂讨论同时以中英文进行，通常在周日举行。
        </p>
        <h2 className='font-semibold mt-6 text-4xl'>
          周间查经小组 (Weekday Bible Study)
        </h2>
        <p className=' mt-6 mb-12'>
          这是针对想在基督信仰中成长并寻求信仰支持的兄弟姐妹
          们所设立的小组。有姐妹查经班，弟兄查经班以及男女混 合班。
        </p>
        <h2 className='font-semibold mt-6 text-4xl'>幼儿游戏组 (Kids Club)</h2>
        <p className=' mt-6 mb-12'>
          教会在每学期间于周三和周五早上十点都有幼儿游戏组，
          让孩子们在玩乐中学习社交，同时家长们可以藉由活动交
          朋友并对圣经有初步了解。。
        </p>
        <h2 className='font-semibold mt-6 text-4xl'>
          周五课后活动 (Friday After School Activities)
        </h2>
        <p className=' mt-6 mb-12'>
          教会在每学期间于周五下午举办课后活动，孩子们在安全
          的环境下玩乐、交新朋友和了解创造并爱他们的上帝。
          下午四点到五点半，我们分别有学前班到二年级以及三到六年级的两个组。
          孩子们玩游戏、听圣经故事以及做手工。
          对于六到十一年级的大孩子，教会于周五晚七点到九点有青年组。
        </p>
        <h2 className='font-semibold mt-6 text-4xl'>联系方式 (Contact Us)</h2>
        <p className=' mt-6'>欲知这些活动的详细信息，请联系：</p>
        <p className=' mt-6'>教会办公室 电话:9874 1926 或 </p>
        <p className=' mt-6'>
          Andrew Irving (国际部门牧师 International Ministry) Andrew Irving
        </p>
        <p className=' mt-6'>电邮: andrew@westrydeanglican.org.au</p>
      </motion.div>
    </motion.div>
  );
};

export default ChineseIntro;
