'use client'

import React, { useState } from 'react'
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check, X } from 'lucide-react'

interface User {
  id: number;
  name: string;
  type: string;
  otpId: string;
  mobile: string;
  active: boolean;
}

interface AddUserFormProps {
  onClose: () => void;
}

export function AddUserForm({ onClose }: AddUserFormProps) {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'admin', type: 'Admin', otpId: 'admin', mobile: '919690231944', active: true }
  ])
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    otpId: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, type: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    const newUser: User = {
      id: users.length + 1,
      name: formData.name,
      type: formData.type,
      otpId: formData.otpId,
      mobile: formData.mobile,
      active: true
    }
    setUsers(prev => [...prev, newUser])
    setFormData({
      name: '',
      type: '',
      otpId: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Add/Update User</h1>
        <Button onClick={onClose} variant="outline">Close</Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">User Name :</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter User Name" />
          </div>
          <div>
            <Label htmlFor="type">UserType/Role :</Label>
            <Select onValueChange={handleSelectChange} value={formData.type}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select UserType/Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="otpId">OTP_Id :</Label>
            <Input id="otpId" name="otpId" value={formData.otpId} onChange={handleInputChange} placeholder="Enter OTP_Id" />
          </div>
          <div>
            <Label htmlFor="mobile">Mobile No. (for OTP) :</Label>
            <Input id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Enter Mobile Number (12 Digit including Country Code)" />
            <p className="text-sm text-gray-500 mt-1">Prefix Country Code e.g. 919XXXXXXXXX</p>
          </div>
          <div>
            <Label htmlFor="password">Password :</Label>
            <Input id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} placeholder="Enter Password" />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password :</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" />
          </div>
        </div>
        <div className="flex justify-start space-x-4">
          <Button type="submit">Add/Update</Button>
          <Button variant="outline" onClick={onClose}>Back</Button>
        </div>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Permissions</TableHead>
            <TableHead>S.No.</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>UserType/Role</TableHead>
            <TableHead>OTP_Id</TableHead>
            <TableHead>OTP Mobile</TableHead>
            <TableHead>Deactive</TableHead>
            <TableHead>Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>
                <Button variant="destructive" size="sm">Manage</Button>
              </TableCell>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.type}</TableCell>
              <TableCell>{user.otpId}</TableCell>
              <TableCell>{user.mobile}</TableCell>
              <TableCell>{user.active ? <X className="text-red-500" /> : <Check className="text-green-500" />}</TableCell>
              <TableCell>{user.active ? <Check className="text-green-500" /> : <X className="text-red-500" />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}