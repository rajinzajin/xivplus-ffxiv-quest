import quests from "~/data/quest_details.json"
import expansions from "~/data/expansions.json"
import journal_genre from "~/data/journal_genre.json"
import class_job from "~/data/class_job.json"
export default defineEventHandler((event) => {
    const quest = quests.find(q=>q.id == `${event.context.params.id}`)
    const {id, name, GilReward, JournalGenre, ExpFactor, ClassJob_Required} = quest
    return {
        id,
        name,
        expansion: expansions.find(e=>e.id == `${quest.expansion}`).name,
        GilReward,
        JournalGenre: journal_genre.find(j=>j.id == `${JournalGenre}`),
        ExpFactor,
        ClassJob_Required: class_job.find(c=>c.id == `${ClassJob_Required}`)
    }
});
