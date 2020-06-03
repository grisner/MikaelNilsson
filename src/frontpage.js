

Vue.component('salespitch', {
  props: ['salespitch'],
  template: `
    <div id="salespitch">
      <b id="introtext" class="text">{{ salespitch.introtext }}</b>
      <p id="description" class="text">{{ salespitch.description }}</p>
    </div>
  `
});


Vue.component('fieldsOfExpertise', {
  props: ['fieldsOfExpertise'],
  template:
  `
    <div id="fieldsOfExpertise">
      <p class="text sectiontitle">Fields of expertise</p>
      <table id="fieldsTable">
        <tr v-for="(description, field) in fieldsOfExpertise">
          <td class="leftie text key table">❖ {{ field }}</td><td class="rightie text">{{ description }}</td>
        </tr>
      </table>

      <p></p>
    </div>
  `,
  
});


Vue.component('frontpage', {
  props: ['texts'],
  template: `
      <div>
        <salespitch v-bind:salespitch="texts.salespitch"></salespitch>
        <fieldsOfExpertise v-bind:fieldsOfExpertise="texts.fieldsOfExpertise"></fieldsOfExpertise>
          
      </div>
    `
});