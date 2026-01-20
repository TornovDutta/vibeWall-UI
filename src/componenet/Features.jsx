import React from 'react'
import SubFeatures from './SubFeatures'

function Features({ SectionHeading, features }) {
  return (
    <section id="features" className="space-y-10">
      <SectionHeading
        label="FEATURES_ENABLED"
        title="Operational capabilities online"
        description="Everything toggled to ON for safety, privacy, and resilience."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <SubFeatures
            key={index}
            feature={feature}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Features
