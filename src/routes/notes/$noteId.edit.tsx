import { createFileRoute } from '@tanstack/react-router'
import { NoteForm } from '../../pages/notes/NoteForm'

export const Route = createFileRoute('/notes/$noteId/edit')({
  component: RouteComponent,
  staticData: {
    title: "Note edit"
  }
})

function RouteComponent() {
  return <NoteForm/>
}
