import quests from "~/data/quest_details.json"
import expansions from "~/data/expansions.json"
import journal_genre from "~/data/journal_genre.json"
export default defineEventHandler((event) => {
    const quest = quests.find(q=>q.id == `${event.context.params.id}`)
    const {id, name, GilReward, JournalGenre} = quest
    return {
        id,
        name,
        expansion: expansions.find(e=>e.id == `${quest.expansion}`).name,
        GilReward,
        JournalGenre: journal_genre.find(j=>j.id == `${JournalGenre}`)
    }
});
