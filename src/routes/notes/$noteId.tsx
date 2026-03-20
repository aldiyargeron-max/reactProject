import { createFileRoute } from '@tanstack/react-router'
import { NoteOne } from '../../pages/notes/NoteOne'

export const Route = createFileRoute('/notes/$noteId')({
  component: RouteComponent,
  staticData: {
    title: "Note ID"
  }
})

function RouteComponent() {
  return <NoteOne/>
}
