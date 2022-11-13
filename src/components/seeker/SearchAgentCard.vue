<template>
    <div class="col" v-for="agent in agents" :key="agent.id">
        <div class="card shadow-sm">

            <img :src="agent.profilepic" alt="" style="width: 100%; height: 225px; object-fit: cover;">

            <div class="card-body">
                <h5 class="pp-subhead">{{ agent.salesperson_name }}</h5> 
                <p class="card-text">
                    {{year(agent)}}<i class="dot-left">{{agent.registration_no }}</i> <br>
                    {{ agent.estate_agent_name }} <br>
                    
                </p>
                <div class="d-flex justify-content-around align-items-center">
                    <div class="btn-group w-100">
                        <button type="button" class="btn btn-lg btn-outline-success" @click="getAgent(agent.uid)">View</button>
                        <button type="button" class="btn btn-lg btn-outline-secondary" @click="startChat(agent.uid)">Chat</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { CreateChat } from '@/scripts/chat';
export default {
    name: "AgentCard",
    props:['agents'],
    methods:{
        getAgent(uid){
            console.log(uid);
            var route = `viewagent/${uid}`
            console.log(route);
            this.$router.push({ name: 'viewagent', params: { agentuid: uid } })
        },
        year(agent){
            var end_date = agent.registration_end_date.split('-')
            var end = Number(end_date[0])
            var start_date = agent.registration_start_date.split('-')
            var start = Number(start_date[0])
            var years = end-start == 0 ? 1 : end-start
            console.log(years);
            return  years + (years > 1 ? ' years' : ' year')
        },
        async startChat(agentuid){
            await CreateChat(localStorage['uid'],agentuid)
            this.$router.push({path:'chat'})
        }
    }
};
</script>