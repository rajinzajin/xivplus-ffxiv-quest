import quests from "~/data/quests.json"
export default defineEventHandler((event) => {
    return quests.find(q=>q.id == `${event.context.params.id}`)
});
