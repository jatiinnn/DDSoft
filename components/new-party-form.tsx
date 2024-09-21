'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Search } from "lucide-react"
import { format } from "date-fns"



export function NewPartyForm() {
  const [openingDate1, setOpeningDate1] = useState<Date>()
  const [openingDate2, setOpeningDate2] = useState<Date>()

  return (
    <div className="container mx-auto p-6 max-w-4xl bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">New Party</h1>
      <p className="text-sm text-red-500 mb-4 text-right">* = Required Information</p>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="code">Code</Label>
            <Input id="code" className="w-full" />
          </div>
          <div>
            <Label htmlFor="opening-type-1" className="text-red-500">*Opening Type 1</Label>
            <Select>
              <SelectTrigger id="opening-type-1" className="w-full">
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
            <Label htmlFor="party-name" className="text-red-500">*Party Name</Label>
            <Input id="party-name" className="w-full" required />
          </div>
          <div>
            <Label htmlFor="opening-date-1">Opening Date 1</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${!openingDate1 && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {openingDate1 ? format(openingDate1, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={openingDate1}
                  onSelect={setOpeningDate1}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="group">Group</Label>
            <Select>
              <SelectTrigger id="group" className="w-full">
                <SelectValue placeholder="--None--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="group1">Group 1</SelectItem>
                <SelectItem value="group2">Group 2</SelectItem>
                <SelectItem value="group3">Group 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="opening-balance-1">Opening Balance 1</Label>
            <Input id="opening-balance-1" type="number" className="w-full" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" className="w-full" />
          </div>
          <div>
            <Label htmlFor="discount-1">Discount 1 (in %)</Label>
            <Input id="discount-1" type="number" className="w-full" />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" className="w-full" />
          </div>
          <div>
            <Label htmlFor="closing-balance">Closing Balance</Label>
            <Input id="closing-balance" type="number" className="w-full" />
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
            <Label htmlFor="opening-type-2">Opening Type 2</Label>
            <Select>
              <SelectTrigger id="opening-type-2" className="w-full">
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
            <Label htmlFor="phone">Phone no.</Label>
            <Input id="phone" type="tel" className="w-full" />
          </div>
          <div>
            <Label htmlFor="opening-date-2">Opening Date 2</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${!openingDate2 && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {openingDate2 ? format(openingDate2, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={openingDate2}
                  onSelect={setOpeningDate2}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" className="w-full" />
          </div>
          <div>
            <Label htmlFor="opening-balance-2">Opening Balance 2</Label>
            <Input id="opening-balance-2" type="number" className="w-full" />
          </div>
          <div>
            <Label htmlFor="agent">Agent</Label>
            <div className="relative">
              <Input id="agent" className="w-full pr-10" placeholder="Search Agents..." />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div>
            <Label htmlFor="discount-2">Discount 2 (in %)</Label>
            <Input id="discount-2" type="number" className="w-full" />
          </div>
          <div>
            <Label htmlFor="gst">GST</Label>
            <Input id="gst" className="w-full" />
          </div>
          <div>
            <Label htmlFor="private-marks">Private Marks</Label>
            <Input id="private-marks" className="w-full" />
          </div>
          <div>
            <Label htmlFor="transport">Transport</Label>
            <div className="relative">
              <Input id="transport" className="w-full pr-10" placeholder="Search Transports..." />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
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

export default NewPartyForm;