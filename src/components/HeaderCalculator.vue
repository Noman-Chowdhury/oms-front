<script setup>
import {ref} from "vue";

const input = ref('');
    const lastInputIsSymbol = ref(false);
    const buttons = ref([
      [
        { value: 'C', class: 'bg-danger' },
        { value: 'CE', class: 'bg-secondary' },
        { value: '/', class: 'dgb-calc-oprator bg-primary' },
        { value: '*', class: 'dgb-calc-oprator bg-primary' },
      ],
      [
        { value: '7' },
        { value: '8' },
        { value: '9' },
        { value: '-', class: 'dgb-calc-oprator bg-primary' },
      ],
      [
        { value: '4' },
        { value: '5' },
        { value: '6' },
        { value: '+', class: 'dgb-calc-oprator bg-primary' },
      ],
      [
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '=', class: 'dgb-calc-sum bg-primary', rowspan: 2 },
      ],
      [
        { value: '0', colspan: 2 },
        { value: '.' },
      ],
    ]);

    const isSymbol = (input) => ['+', '-', '*', '/'].includes(input);

    const handleClick = (button) => {
      if (isSymbol(button) && lastInputIsSymbol.value) {
        return;
      }

      if (button === '=') {
        if (isSymbol(input.value.slice(-1))) {
          input.value = input.value.slice(0, -1);
        }
        input.value = eval(input.value);
      } else if (button === 'C') {
        input.value = '';
      } else if (button === 'CE') {
        input.value = input.value.substr(0, input.value.length - 1);
      } else {
        input.value += button;
      }

      lastInputIsSymbol.value = isSymbol(button);
    };
</script>

<template>
    <ul class="dropdown-menu calculator-dropdown">
        <div class="dgb-calc-box">
        <div>
            <input type="text" v-model="input" id="dgbCalcResult" placeholder="0" autocomplete="off" readonly>
        </div>
        <table>
            <tbody>
                <tr v-for="(row, i) in buttons" :key="i">
                    <td
                    v-for="(button, j) in row"
                    :key="j"
                    :class="button.class"
                    @click="handleClick(button.value)"
                    >
                    {{ button.value }}
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </ul>
</template>