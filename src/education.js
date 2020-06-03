Vue.component('educations', {
    props: ['educations'],
    template: `
        <div id="educations">
            <p class="sectiontitle">educations</p>
            <div v-for="education in educations">
                <div class="education">
                    <div class="leftie">
                        <p>{{education.time}}</p>
                    </div>
                    <div class="rightie">
                        <p>{{education.education}}</p>
                    </div>
                </div>
            </div>
        </div>
    `
});