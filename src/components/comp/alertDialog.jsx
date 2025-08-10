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



export function DeletionDialog( {func, message, button_msg} ) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='font-semibold text-base bg-red-500 text-blue-200 hover:bg-red-800 transition-colors duration-300 rounded cursor-pointer h-9 px-4 py-1'>
          {button_msg}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={'bg-cyan-900'}>
        <AlertDialogHeader>
          <AlertDialogTitle className={'text-cyan-500'}>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className={'text-cyan-200'}>
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className={'bg-cyan-300 text-cyan-900 hover:bg-cyan-200 hover:text-cyan-900 cursor-pointer transition-all duration-200'} onClick={func}>
                Confirm
          </AlertDialogAction>
          <AlertDialogCancel className={'bg-cyan-900 text-cyan-200 hover:bg-cyan-950 hover:text-cyan-200 cursor-pointer transition-all duration-200'}>
                Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}