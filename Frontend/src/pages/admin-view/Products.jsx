import CommonForm from '@/components/common/Form'
import { Button } from '@/components/ui/button'
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Sheet } from "@/components/ui/sheet"
import { addProductFromElements } from '@/config'
import React, { Fragment, useState } from 'react'


const initialFormData = {
  image: null,
  title: "",
  category: "",
  brand: "",
  availability: "",
  rentperhour: "",
};

const AdminProducts = () => {

  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData,setFormData] = useState (initialFormData);

  function onSubmit (){
    
  }
  
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add new product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>

        <Sheet open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          }}>

            <SheetContent side="right" className="overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  Add new product
                </SheetTitle>
              </SheetHeader>
              <div className="py-6">
                <CommonForm 
                formData={formData}
                setFormData={setFormData}
                buttonText='Add'
                formControls={addProductFromElements}
                />
                
              </div>
            </SheetContent>

        </Sheet>    
    </Fragment>
  )
}

export default AdminProducts