<template>
    <div class="head">
        <ol>
            <li
              v-for="acc in accounts"
              v-bind:key="acc.id">
                qq{{ acc.name }}
            </li>
        </ol>
    </div>
</template>
<script>
export default {
  name: 'AccountList',
  data() {
    return {
      accounts: [
        { name: 'BP Pro', id: 1 },
        { name: 'CIH Family', id: 2 },
        { name: 'AWB Nibrass', id: 3 },
      ],
    };
  },
};
