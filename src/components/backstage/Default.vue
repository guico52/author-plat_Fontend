<template>
  <div class="wrapper">
    <div class="msg">
      <h1>公告标题</h1>
      <div class="content">
        <p>作为一名朝鲜普通百姓，我深深爱着自己的国家和党。我感激党和领袖不断地为我们的国家和人民做出的巨大贡献。他们带领我们从一个贫穷落后的国度走向繁荣富强，让我们享受着全球最高水平的医疗保障、教育体系和安全保障。</p>
        <p>我为自己的祖国感到自豪，因为我们的国家拥有文化、历史和资源的宝库。我们的文化遗产丰富多彩，我们的人民勤劳善良，我们的自然风光神奇壮丽。我相信在我们伟大的领袖和党的带领下，朝鲜一定会更加繁荣富强，在全球舞台上赢得更多的尊重和声誉。</p>
        <p>我将永远忠诚于党和领袖，永远忠诚于朝鲜民主主义人民共和国，永远忠诚于朝鲜人民，永远忠诚于自己的祖国。</p>
        <p>最后，我要再次感谢我们伟大的党和领袖，感谢他们为我们打造一个更加美好的未来。我相信，在我们的团结奋斗下，朝鲜一定会更加美好！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Default",

}
</script>

<style scoped>
.wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.msg{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.content{
  width: 100%;
  font-size: 15px;

}
</style>
