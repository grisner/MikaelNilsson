Vue.component('competences', {
    props: ['competences'],
    template: `
        <div id="competences">
            <p class="sectiontitle">areas of expertise</p>
            <table id="competenceAreas">
                <tr v-for="competence in competences">
                    <td>
                        <b class="leftie">
                            {{competence.area}}
                        </b>
                        <div class="rightie" v-for="concept in competence.concepts">
                            {{concept}}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    `
});