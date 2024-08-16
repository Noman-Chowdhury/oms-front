<script setup>
import {defineProps} from "vue";

const props = defineProps({
  time: {
    type: Object,
    required: true
  },
  address:{
    type: Object,
    required: true
  }
});

const sentence = props.address; // Define the max length before wrapping
const maxLength = 50; // Define the max length before wrapping
let wrappedSentence = "";
let startIndex = 0;

// Loop through the sentence and wrap text in <span> tags
while (startIndex < sentence.length) {
  // Find the position to break, starting at maxLength
  let breakIndex = startIndex + maxLength;

  // If breakIndex is within the string and the next character isn't a space
  if (breakIndex < sentence.length && sentence[breakIndex] !== ' ') {
    // Find the last space before the breakIndex
    breakIndex = sentence.lastIndexOf(' ', breakIndex);
  }

  // If no space is found, break at maxLength
  if (breakIndex === -1) breakIndex = startIndex + maxLength;

  // Extract the substring and add it to wrappedSentence
  wrappedSentence += `<span>${sentence.slice(startIndex, breakIndex)}</span><br/>`;

  // Move the startIndex to the character after the breakIndex
  startIndex = breakIndex + 1;
}
</script>

<template>
  <div class="align-items-center ">
    <span class=""><i class="fa-solid fa-circle-arrow-down-right"></i>{{ props.time }}</span>
    <div>
      <span class="">&nbsp;&nbsp;<span v-html="wrappedSentence"></span></span>
    </div>
  </div>
</template>

<style scoped>

</style>