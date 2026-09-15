import { activities } from './activities'
import { rooms } from './rooms'

/**
 * Sincroniza Room.activityIds a partir de activities — única fonte
 * de verdade para o vínculo atividade↔sala.
 */
function linkRoomsToActivities(): void {
  for (const room of rooms) {
    room.activityIds = activities
      .filter((activity) => activity.rooms.includes(room.code))
      .map((activity) => activity.id)
  }
}
linkRoomsToActivities()

export { activities, getActivityById, getActivitiesByRoomCode, getFeaturedActivities } from './activities'
export { rooms, getRoomByCode, getRoomById } from './rooms'
export { schoolInfo } from './school'
export { mapData } from './map'
export { categories, getCategoryById } from './categories'
