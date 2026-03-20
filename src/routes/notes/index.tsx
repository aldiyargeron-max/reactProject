import { createFileRoute } from '@tanstack/react-router'
import { NotesList } from '../../pages/notes/NotesList'

export const Route = createFileRoute('/notes/')({
  component: RouteComponent,
  staticData: {
    title: "Notes"
  }
})

function RouteComponent() {
  return <NotesList/>
}
