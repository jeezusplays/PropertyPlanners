<template lang="">
    <div class="d-flex mb-3 me-3 pointer fit-content rounded-3 chat-more">
            <img src="../../assets/sam.jpg" class="card-img rounded-start" alt="">
            <div class="text-start text-wrap ms-2 fit-content"
            style="min-width: 200px">
              <span class="pp-fat-text text-wrap"> John Doe</span>
              <br />
              <p class="opacity-50 pp-smol m-0">HDB: 12 sold<span class="dot-left m-0">Private: 15 sold</span></p>
              
              <p class="opacity-50 pp-smol m-0">2 years<span class="dot-left m-0"></span>4 stars</p>
            </div>
          </div>
</template>
<script>
export default {
    name: 'agentcard'
}
</script>
<style>
.fit-content{
  min-width: fit-content;
}
.bg-light-dark{
    background-color: rgba(var(--main-green-rgb), 0.2);
}
.card-img{
    object-fit: cover;
    /* background-position: center center; */
    min-width: 80px;
    min-height: 80px;
    width: 80px;
    height: 80px;
}
.dot-left::before{
    content: '•';
    margin: 0 4px;
}
.chat-more{
    position: relative;
    transition: 400ms;
}
.chat-more::after{
    position: absolute;
    padding: 0 6px 0 6px;
    border-radius: 6px;
    content: 'Chat now';
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.75rem;
    bottom: 0px;
    left: 86px;
    z-index: 2;
    float: left;
    transition: 300ms;
    opacity: 0;
    background-color: rgba(var(--main-green-rgb),0.2);
}
.chat-more:hover::after{
    opacity: 1;
}

</style>