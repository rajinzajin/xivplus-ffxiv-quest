import quests from "~/data/quest_details.json"
import expansions from "~/data/expansions.json"
export default defineEventHandler((event) => {
    const quest = quests.find(q=>q.id == `${event.context.params.id}`)
    const {id, name, GilReward} = quest
    return {
        id,
        name,
        expansion: expansions.find(e=>e.id == `${quest.expansion}`).name,
        GilReward
    }
});
