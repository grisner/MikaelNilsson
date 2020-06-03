Vue.component('assignments', {
    props: ['texts'],
    template: `
        <div id="assignments">
            <p class="sectiontitle">Selection of assignments</p>
            <div v-for="assignment in texts.assignments">
                <div class="assignment">
                    <div class="leftie">
                        <p class="org">{{assignment.organization}}</p>
                        <p class="assignTime">({{assignment.time}})</p>
                    </div>
                    <div class="rightie">
                        <p class="assignTitle">{{assignment.title}}</p>
                        <p class="competencesUsed">({{assignment.competencesUsed}})</p>
                        <p>{{assignment.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    `
});