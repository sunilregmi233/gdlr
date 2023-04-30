<template>
  <div class="q-pa-md about">
    <div class="row about-content">
      <div id="col-1" class="col">
        
      </div>
      <div class='ripple-background'>
        <div class='circle xxlarge shade1'></div>
        <div class='circle xlarge shade2'></div>
        <div class='circle large shade3'></div>
        <div class='circle mediun shade4'></div>
        <div class='circle small shade5'></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.about {
  background: rgb(128, 13, 13);
  height: 100vh;
}
.about-content {
  width: 100%;
}
#col-1 {
  position: absolute;
  background-image: url("/images/walk.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  left: 40%;
  padding: 20px;
  height: 500px;
  width: 1000px;
  top: 200px;
}
.ripple-background {
  position: relative;
  top: 50%;

}

.circle{
  position: absolute;
  border-radius: 50%;
  background: $info;  
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
}

.small{
  width: 100px;
  height: 100px;
  left: -50px;
  bottom: -50px;
}

.medium{
  width: 200px;
  height: 200px;
  left: -100px;
  bottom: -100px;
}

.large{
  width: 300px;
  height: 300px;
  left: -150px;
  bottom: -150px;
}

.xlarge{
  width: 400px;
  height: 400px;
  left: -200px;
  bottom: -200px;
}

.xxlarge{
  width: 500px;
  height: 500px;
  left: -250px;
  bottom: -250px;
}

.shade1{
  opacity: 0.2;
}
.shade2{
  opacity: 0.5;
}

.shade3{
  opacity: 0.7;
}

.shade4{
  opacity: 0.8;
}

.shade5{
  opacity: 0.9;
}

@keyframes ripple{
  0%{
    transform: scale(0.8);
  }
  
  50%{
    transform: scale(1.2);
  }
  
  100%{
    transform: scale(0.8);
  }
}

</style>