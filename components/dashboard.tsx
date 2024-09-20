'use client'

import { useState } from 'react'
import { Moon, Sun, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { AddUserForm } from './add-user-form'
import NewAgentForm from './new-agent-form'

export function DashboardComponent() {
  const [theme, setTheme] = useState('light')
  const [showAddUserForm, setShowAddUserForm] = useState(false)
  const [showNewAgentForm, setShowNewAgentForm] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleAddUser = () => {
    setShowAddUserForm(true)
    setShowNewAgentForm(false)
  }

  const handleNewAgent = () => {
    setShowNewAgentForm(true)
    setShowAddUserForm(false)
  }

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex space-x-4">
            <Button variant="ghost">Dashboard</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center">
                  Master
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Agent</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onSelect={handleNewAgent}>New Agent</DropdownMenuItem>
                    <DropdownMenuItem>Agents List</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Unit</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>New Unit</DropdownMenuItem>
                    <DropdownMenuItem>Units List</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Party</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>New Party</DropdownMenuItem>
                    <DropdownMenuItem>Parties List</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Transport</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>New Transport</DropdownMenuItem>
                    <DropdownMenuItem>Transports List</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>HSN Form</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>New HSN Form</DropdownMenuItem>
                    <DropdownMenuItem>HSN Form List</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Item</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>New Item</DropdownMenuItem>
                    <DropdownMenuItem>Items List</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center">
                  Purchase
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Purchased Voucher</DropdownMenuItem>
                <DropdownMenuItem>Debit Note</DropdownMenuItem>
                <DropdownMenuItem>Supplier Ledger</DropdownMenuItem>
                <DropdownMenuItem>Payment Out</DropdownMenuItem>
                <DropdownMenuItem>Purchased Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center">
                  Sales
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Sales Order</DropdownMenuItem>
                <DropdownMenuItem>Sales Invoice</DropdownMenuItem>
                <DropdownMenuItem>Credit Note</DropdownMenuItem>
                <DropdownMenuItem>Customer Ledger</DropdownMenuItem>
                <DropdownMenuItem>Payment In</DropdownMenuItem>
                <DropdownMenuItem>Sales Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost">Stocks</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center">
                  Print
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Envelope</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center">
                  Settings
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Add Role</DropdownMenuItem>
                <DropdownMenuItem onSelect={handleAddUser}>Add User</DropdownMenuItem>
                <DropdownMenuItem>Change Password</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        {showAddUserForm ? (
          <AddUserForm onClose={() => setShowAddUserForm(false)} />
        ) : showNewAgentForm ? (
          <NewAgentForm />
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className="text-xl font-semibold mb-2">Annual Data</h2>
                <div className="space-y-2">
                  <p>Invoices: 0</p>
                  <p>Taxable Amount: Rs. 0.00</p>
                  <p>SGST: Rs. 0.00</p>
                  <p>CGST: Rs. 0.00</p>
                  <p>IGST: Rs. 0.00</p>
                  <p>Other Charges: Rs. 0.00</p>
                  <p>Total Value: Rs. 0.00</p>
                </div>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className="text-xl font-semibold mb-2">Monthly Data</h2>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jan">January</SelectItem>
                    <SelectItem value="feb">February</SelectItem>
                    <SelectItem value="mar">March</SelectItem>
                    <SelectItem value="apr">April</SelectItem>
                    <SelectItem value="may">May</SelectItem>
                    <SelectItem value="jun">June</SelectItem>
                    <SelectItem value="jul">July</SelectItem>
                    <SelectItem value="aug">August</SelectItem>
                    <SelectItem value="sep">September</SelectItem>
                    <SelectItem value="oct">October</SelectItem>
                    <SelectItem value="nov">November</SelectItem>
                    <SelectItem value="dec">December</SelectItem>
                  </SelectContent>
                </Select>
                <div className="mt-4">
                  <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
                    Chart Placeholder
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <footer className={`mt-auto p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto text-center">
          <p>Contact: info@example.com | Phone: (123) 456-7890</p>
          <p>&copy; 2023 Dashboard Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}