"use client"

import { motion } from "framer-motion"
import { Activity, Calendar, Dumbbell, LineChart } from 'lucide-react'

export default function AppWidgets() {
  return (
    <div className="bg-gray-50 h-full w-full p-4 space-y-4">
      {/* Workout Progress Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">Today's Progress</h3>
          <Activity className="h-5 w-5 text-blue-500" />
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-gray-900">73%</p>
            <p className="text-sm text-gray-500">Daily Goal</p>
          </div>
          <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
        </div>
      </motion.div>

      {/* Upcoming Workout Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">Next Workout</h3>
          <Calendar className="h-5 w-5 text-purple-500" />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">Upper Body Strength</p>
          <p className="text-sm font-medium text-gray-900">Today • 6:00 PM</p>
        </div>
      </motion.div>

      {/* Stats Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">Weekly Stats</h3>
          <LineChart className="h-5 w-5 text-green-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Workouts</p>
            <p className="text-xl font-bold text-gray-900">12</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Calories</p>
            <p className="text-xl font-bold text-gray-900">8.2k</p>
          </div>
        </div>
      </motion.div>

      {/* AI Form Analysis Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">Form Analysis</h3>
          <Dumbbell className="h-5 w-5 text-orange-500" />
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Last Session</p>
          <p className="text-green-600 font-medium">98% Perfect Form</p>
        </div>
      </motion.div>
    </div>
  )
} 