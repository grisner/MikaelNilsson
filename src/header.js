Vue.component('pageHeader', {
    props: ['texts'],
    template: `
        <div id="pageHeader" class="divHeader">
            <nameheader class="leftie" v-bind:consultant="texts.consultant"></nameheader>
        
            <img src="assets/images/devise.png" id="logo" class="rightie">
        </div>
    `
});


Vue.component('nameheader', {
    props: ['consultant'],
    template: `
      <div id="nameheader" class="divHeader">
        <h1 id="name">{{consultant.name}}</h1>
      </div>
    `
});