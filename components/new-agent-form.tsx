'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

interface AddAgentFormProps {
  onClose: () => void;
}

export function NewAgentForm({ onClose }: AddAgentFormProps) {

  const [openingDate, setOpeningDate] = useState<Date>()

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">New Agent</h1>
      <div className='flex justify-between items-center'>
      <p className="text-sm text-red-500 mb-4">* = Required Information</p>
      <Button onClick={onClose} variant="outline" >Close</Button>

      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-red-500">*Name</Label>
            <Input id="name" className="w-full" required />
          </div>
          <div>
            <Label htmlFor="commission">Commission (in %)</Label>
            <Input id="commission" type="number" className="w-full" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" className="w-full" />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" className="w-full" />
          </div>
          <div>
            <Label htmlFor="opening-type" className="text-red-500">*Opening Type</Label>
            <Select>
              <SelectTrigger id="opening-type" className="w-full">
                <SelectValue placeholder="--None--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="type1">Type 1</SelectItem>
                <SelectItem value="type2">Type 2</SelectItem>
                <SelectItem value="type3">Type 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Select>
              <SelectTrigger id="state" className="w-full">
                <SelectValue placeholder="--None--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="state1">State 1</SelectItem>
                <SelectItem value="state2">State 2</SelectItem>
                <SelectItem value="state3">State 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="opening-balance">Opening balance</Label>
            <Input id="opening-balance" type="number" className="w-full" />
          </div>
          <div>
            <Label htmlFor="phone">Phone no.</Label>
            <Input id="phone" type="tel" className="w-full" />
          </div>
          <div>
            <Label htmlFor="opening-date">Opening Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${!openingDate && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {openingDate ? format(openingDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={openingDate}
                  onSelect={setOpeningDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="closing-balance">Closing Balance</Label>
            <Input id="closing-balance" type="number" className="w-full" />
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button variant="outline">Save & New</Button>
        <Button>Save</Button>
      </div>
    </div>
  )
}

export default NewAgentForm;