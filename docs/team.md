---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.discordapp.com/guilds/994058244832112732/users/612207504793010186/avatars/22db9f366bca8061e4e03d7c90a4f4c8.webp?size=320',
    name: 'Jason Han',
    title: 'PO',
    desc: '主設計',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/zi.yan.395' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1161488205791629342/44a3424d38bd8344d86ae3fe113a06cc.webp?size=240',
    name: '【Peggy】劉依璇',
    title: 'UX兼任UI',
    desc: '感恩~~~~',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/471281848861982723/6e2b68a3b4dfa8569ba17a63b2a8c3fe.webp?size=240',
    name: 'Biffo【邦家瑜】',
    title: 'Frontend',
    desc: '苦命工程師'
  },
  {
    avatar: 'https://banner2.cleanpng.com/20240209/qtb/transparent-discord-icon-blue-circle-with-bunny-icon-no-1710883082406.webp',
    name: '【Terry】游凱丞',
    title: 'Frontend',
    desc: '偉大的作者'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/998421755217596496/71fe0c36235d72ea9a97026dd446b8b6.webp?size=240',
    name: '【Jeff】施任祐',
    title: 'Frontend',
    desc: '主輸出手'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/389385118415978498/ebf98134a9b844954ce712076515cc8a.webp?size=240',
    name: '【Paul】陳柏成',
    title: 'Frontend',
    desc: '偉大的作者'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/195026602881449986/40822f3b08c2aa82e517ba56a6b1afff.webp?size=240',
    name: '【Peter】莊政哲',
    title: 'Frontend',
    desc: 'CSS大師:D '
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/510646514708643840/9a80e31af6db6d88c46536005295abca.webp?size=240',
    name: '【Russell】陳弘毅',
    title: 'Backend',
    desc: '偉大的作者'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/589113206589358099/d68ab23fb22ce26b1e92ca87cf4000f3.webp?size=240',
    name: '【Vera】楊孟筑(小筑)',
    title: 'Backend',
    desc: '主輸出手'
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      各位偉大的貢獻者們    
    </template>
    <template #lead>
      感謝各位的幫忙，讓這個產品越來越好。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
