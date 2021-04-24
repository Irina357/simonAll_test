<template>
  <div>
    <h1>Simon Says</h1>
    <h2 class="SimonTitle" >Just repeat!</h2>
    <div class="SimonContainer">
      <div class="SimonColumnLeft">
        <div v-show="activeButton" class="SimonActiveButton">
          <div class="SimonPlayContainer">
            <div class="SimonButtonPlay clBlue" v-bind:class="{opacityNone: allClass[1].opac}" @click="buttonClick(1)">
            </div>
            <div class="SimonButtonPlay clRed" v-bind:class="{opacityNone: allClass[0].opac}" @click="buttonClick(0)">
            </div>
          </div>
          <div class="SimonPlayContainer">
            <div class="SimonButtonPlay clYellow" v-bind:class="{opacityNone: allClass[3].opac}" @click="buttonClick(3)">
            </div>
            <div class="SimonButtonPlay clGreen" v-bind:class="{opacityNone: allClass[2].opac}" @click="buttonClick(2)">
            </div>
          </div>
          <div class="shadow">
          </div>
        </div>
        <div v-show="passiveButton" class="SimonPassiveButton">
          <div class="SimonPlayContainer">
            <div class="SimonButtonPlay clBlue"></div>
            <div class="SimonButtonPlay clRed"></div>
          </div>
          <div class="SimonPlayContainer">
            <div class="SimonButtonPlay clYellow"></div>
            <div class="SimonButtonPlay clGreen"></div>
          </div>
          <div class="shadow">
          </div>
        </div>
      </div>
      <div class="SimonColumnRight">
        <h2>Round: {{ round }}</h2>
        <div class="TextRoundContainer">
          <p v-show="roundShow">Sorry, you lost after {{ round }} rounds!</p>
        </div>
        <div class="buttonStart1" @click="clickMe(time, timeAll)">
         <Button :text="text"/>
        </div>
        <h2>Game Options</h2>
        <div class="SimonOptionsContainer">
          <div class="SimonOptionsPoint" v-show="pointShow1">
          </div>
          <button class="buttonOptions" @click="Normal"></button>
          <p>Normal</p>
        </div>
        <div class="SimonOptionsContainer">
          <div class="SimonOptionsPoint" v-show="pointShow2">
          </div>
          <button class="buttonOptions" @click="Sound"></button>
          <p>Cound only</p>
        </div>
        <div class="SimonOptionsContainer">
          <div class="SimonOptionsPoint" v-show="pointShow3">
          </div>
          <button class="buttonOptions" @click="Light"></button>
          <p>Light only</p>
        </div>
        <div class="SimonOptionsContainer">
          <div class="SimonOptionsPoint" v-show="pointShow4">
          </div>
          <button class="buttonOptions" @click="FreeBoad"></button>
          <p>Free board</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
export default {
  name: 'SimonEasy',
  data() {
    return {
      text: 'Start',
      allClass: [
        {
          opac: false
        },
        {
          opac: false
        },
        {
          opac: false
        },
        {
          opac: false
        }
      ],
      allRandom: [],
      allPlayer: [],
      time: 1500,
      timeAll: 4000,
      activeButton: false,
      passiveButton: true,
      round: 0,
      roundShow: false,
      sound: true,
      light: true,
      freeBoad: true,
      pointShow1: false,
      pointShow2: false,
      pointShow3: false,
      pointShow4: false
    }
  },
  components: {
    Button
  },
  methods: {
    buttonClick(a) {
      this.allPlayer.push(a)
      if (this.sound) {
        this.allClass[a].opac = !this.allClass[a].opac
      }
      setTimeout(() => this.allClass[a].opac = false, 300)
      if (this.light) {
        if (a == 0) {
          this.playSound(require('./glass_ping-Go445-1207030150.mp3'))
        }
        if (a == 1) {
          this.playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')
        }
        if (a == 2) {
          this.playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')
        }
        if (a == 3) {
          this.playSound(require('./08762.mp3'))
        }
      }
    },
    clickMe(time, timeAll) {
      if (this.freeBoad) {
        this.activeButton = !this.activeButton
      this.passiveButton = !this.passiveButton
        this.round++
        this.allRandom = []
        this.allPlayer = []
        if (this.roundShow == true) {
          this.roundShow = !this.roundShow
        }
        let timerId = setInterval(() => {
          let rand = 0 + Math.random() * (4 + 0 - 0);
          let rand1 = Math.floor(rand)
          this.allRandom.push(rand1)
          if (this.sound) {
            this.allClass[rand1].opac = !this.allClass[rand1].opac
          }
          if (this.light) {
            if (rand1 == 0) {
              const audio = new Audio(require('./glass_ping-Go445-1207030150.mp3'))
              audio.play();
            }
            if (rand1 == 1) {
              const audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
              audio.play();
            }
            if (rand1 == 2) {
              const audio = new Audio('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3');
              audio.play();
            }
            if (rand1 == 3) {
              const audio = new Audio(require('./08762.mp3'))
              audio.play();
            }
          }
          setTimeout(() => this.allClass[rand1].opac = false, 300)
        }, 1500)
        setTimeout(() => {
          clearInterval(timerId);

        }, time);
        setTimeout(() => {
          if (JSON.stringify(this.allRandom) === JSON.stringify(this.allPlayer)) {
            this.activeButton = !this.activeButton
            this.passiveButton = !this.passiveButton

            time = time + 1500
            timeAll = timeAll + 2500
            this.clickMe(time, timeAll)
          } else {
            //alert('noy')
            this.roundShow = !this.roundShow
            this.activeButton = !this.activeButton
            this.passiveButton = !this.passiveButton
            setTimeout(() => {
              this.round = 0, this.roundShow = false
            }, 3000)
          }
        }, timeAll)
      }
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    Normal() {
      this.activeButton = false
      this.passiveButton = true
      this.freeBoad = true
      this.light = true
      this.sound = true
      this.pointShow1 = true
      this.pointShow4 = false
      this.pointShow2 = false
      this.pointShow3 = false
    },
    Sound() {
      this.sound = !this.sound
      this.light = true
      this.freeBoad = true
      this.pointShow2 = true
      this.pointShow1 = false
      this.pointShow3 = false
      this.pointShow4 = false
    },
    Light() {
      this.light = !this.light
      this.sound = true
      this.freeBoad = true
      this.pointShow3 = true
      this.pointShow1 = false
      this.pointShow2 = false
      this.pointShow4 = false
    },
    FreeBoad() {
      this.freeBoad = !this.freeBoad
      this.activeButton = true
      this.passiveButton = false
      this.sound = true
      this.light = true
      this.pointShow4 = true
      this.pointShow1 = false
      this.pointShow2 = false
      this.pointShow3 = false
    }
  }
}
</script>

<style lang="sass">
@import '../Style/StyleAll'
.SimonTitle
  margin-bottom: 70px

.SimonContainer, .SimonPlayContainer
  display: flex
  justify-content: center

.SimonContainer
   @media (max-width: 680px)
     display: inline-block

.SimonPlayContainer
  position: relative
  z-index: 100

.TextRoundContainer
  height: 30px

.SimonColumnLeft, .SimonColumnRight
  width: 300px

.SimonColumnRight
  text-align: left
  padding-left: 60px
  padding-top: 40px
  @media (max-width: 680px)
    padding-left: 0
    text-align: center

.SimonButtonPlay
  width: 100px
  height: 100px
  opacity: .4

.clRed
  background: red
  border-top-right-radius: 360%

.clBlue
  background: blue
  border-top-left-radius: 360%

.clGreen
  background: green
  border-bottom-right-radius: 360%

.clYellow
  background: yellow
  border-bottom-left-radius: 360%

.opacityNone
  opacity: 1

.SimonPassiveButton, .SimonActiveButton
  position: relative

.shadow
  position: absolute
  top: 0
  left: 52px
  box-shadow: 5px 5px 5px gainsboro
  width: 203px
  height: 203px
  border-radius: 50%
  background: white

.SimonOptionsContainer
  display: flex
  position: relative
  @media (max-width: 680px)
    padding-left: 25%

.SimonOptionsPoint
  position: absolute
  width: 10px
  height: 10px
  border-radius: 50%
  background: cornflowerblue
  left: 5px
  top: 4.5px

.buttonOptions
  outline: none
  border: cornflowerblue 1px solid
  width: 20px
  height: 20px
  border-radius: 50%
  margin-right: 10px
  margin-bottom: 10px

.buttonStart1
  width: 100px
  height: 30px
  margin-bottom: 30px
  @media (max-width: 680px)
    margin: 0 auto
    margin-bottom: 40px
</style>
