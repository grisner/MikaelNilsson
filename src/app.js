var app = new Vue({
    el: '#app',
    template: `
        <table>
          <thead>
            <tr><td>
              <pageHeader v-bind:texts="texts"></pageHeader>
            </td></tr>
          </thead>
          <tbody>
            <tr class="section"><td>
              <frontpage v-bind:texts="texts"></frontpage>
            </td></tr>
            <tr class="section"><td>
              <assignments v-bind:texts="texts"></assignments>
            </td></tr>
            <tr class="section"><td>
              <educations v-bind:educations="texts.educations"></educations>
            </td></tr>
            <tr class="section"><td>
              <competences v-bind:competences="texts.competences"></competences>
            </td></tr>
          </tbody>
        </table>
    `,
      data: () => {
        const texts = getTexts();
        return {texts}
      },
      message: 'Mikael Nilsson Konsultprofil'
  })