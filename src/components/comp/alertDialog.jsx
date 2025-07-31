import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const handleDelete = (list, setList, titem, n, setn) => {
    setList(list.filter(t => t.id !== titem.id))
    if (titem.checked === true){
      setn(n)
    }
    else {
      setn(n => n-1)
    }
}

export function DeletionDialog( {list, setList, titem, n, setn} ) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='bg-cyan-700 font-semibold text-blue-200 hover:bg-cyan-800 transition-colors duration-300 rounded cursor-pointer h-9 px-4 py-1'>Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={'bg-cyan-900'}>
        <AlertDialogHeader>
          <AlertDialogTitle className={'text-cyan-500'}>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className={'text-cyan-200'}>
            Do you want to Delete this Task?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className={'bg-cyan-300 text-cyan-900 hover:bg-cyan-400 hover:text-cyan-900 transition-all duration-200'}
                onClick={() => handleDelete(list, setList, titem, n, setn)}>Confirm
          </AlertDialogAction>
          <AlertDialogCancel className={'bg-cyan-900 text-cyan-200 hover:bg-cyan-950 hover:text-cyan-200 transition-all duration-200'}>
                Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}