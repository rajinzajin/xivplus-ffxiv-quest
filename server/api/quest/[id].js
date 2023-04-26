import quests from "~/data/quests.json"
export default defineEventHandler((event) => {
    return quests.find(q=>q["#"] == `${event.context.params.id}`)
});
