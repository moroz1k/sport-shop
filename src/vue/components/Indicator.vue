<template>
  <div class="indi-wrap">
    <div class="indi">
      <section>
        <div class='sk-circle-bounce'>
          <div class='sk-child sk-circle-1'></div>
          <div class='sk-child sk-circle-2'></div>
          <div class='sk-child sk-circle-3'></div>
          <div class='sk-child sk-circle-4'></div>
          <div class='sk-child sk-circle-5'></div>
          <div class='sk-child sk-circle-6'></div>
          <div class='sk-child sk-circle-7'></div>
          <div class='sk-child sk-circle-8'></div>
          <div class='sk-child sk-circle-9'></div>
          <div class='sk-child sk-circle-10'></div>
          <div class='sk-child sk-circle-11'></div>
          <div class='sk-child sk-circle-12'></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ico from '../../assets/images/ico/loader.svg'

export default {
  name: 'Indi',

  data () {
    return {
      ico
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .indi {
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    &-wrap {
      width: 100%;
    }
    $spinkit-size: 4em !default;
    $spinkit-spinner-color: $color-main !default;

    .sk-circle-bounce {
      $circleCount: 12;
      $animationDuration: 1.2s;

      width: $spinkit-size;
      height: $spinkit-size;
      position: relative;
      margin: auto;

      .sk-child {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }

      .sk-child:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: $spinkit-spinner-color;
        border-radius: 100%;
        animation: sk-circle-bounce-delay $animationDuration infinite ease-in-out both;
      }

      @for $i from 2 through $circleCount {
        .sk-circle-#{$i} {
          transform: rotate((360deg / $circleCount * ($i - 1)));
        }
      }

      @for $i from 2 through $circleCount {
        .sk-circle-#{$i}:before {
          animation-delay: (-$animationDuration + $animationDuration / $circleCount * ($i - 1));
        }
      }
    }

    @keyframes sk-circle-bounce-delay {
      0%, 80%, 100% {
        transform: scale(0);
      }
      40% {
        transform: scale(1.0);
      }
    }
  }
</style>
