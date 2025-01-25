import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AddComment() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Add Comment</h2>
      <Card>
        <CardHeader>
          <CardTitle>Add Comment</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the add comment section.</p>
        </CardContent>
      </Card>
    </div>
  )
}

