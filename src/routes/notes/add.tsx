import { createFileRoute } from '@tanstack/react-router'
import { NoteForm } from '../../pages/notes/NoteForm'

export const Route = createFileRoute('/notes/add')({
  component: RouteComponent,
  staticData: {
    title: "Add Notes"
  }
})

function RouteComponent() {
  return <NoteForm/>
}
