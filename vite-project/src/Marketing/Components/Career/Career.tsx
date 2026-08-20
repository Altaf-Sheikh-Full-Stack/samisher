import { useState, useEffect, useCallback } from 'react'
import Button from "../../../System/Button/Button"
import Box from "../../../System/Layouts/Box/Box"
import Section from "../../../System/Layouts/Section/Section"
import Text from "../../../System/Texts/Text"
import CareerData, { type Job } from "./CareerData"
import "./Career.css"

const Career = () => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null)

    const closeModal = useCallback(() => {
        setSelectedJob(null)
    }, [])

    useEffect(() => {
        if (!selectedJob) return

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal()
        }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [selectedJob, closeModal])

    return (
        <Section className="Career">
            <Box className="Career-Intro">
                <Text textType="H2" color="Dark">Join the team</Text>
                <Text textType="Text">We help B2B companies book qualified meetings. If you love the craft of sales, we want to talk.</Text>
            </Box>

            <Box className="Career-List">
                {CareerData.map((job) => (
                    <button
                        key={job.title}
                        className="Career-Job"
                        type="button"
                        onClick={() => setSelectedJob(job)}
                    >
                        <Box className="Career-JobInfo">
                            <Text textType="H3" color="Dark" weight="500">{job.title}</Text>
                            <Box className="Career-Chips">
                                <span className="Career-Chip">{job.type}</span>
                                <span className="Career-Chip">{job.location}</span>
                            </Box>
                        </Box>
                        <Text textType="Text" className="Career-JobCompensation">{job.compensation}</Text>
                        <span className="Career-JobArrow" aria-hidden="true">→</span>
                    </button>
                ))}
            </Box>

            {selectedJob && (
                <div className="Career-ModalOverlay" onClick={closeModal}>
                    <div
                        className="Career-Modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="career-modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="Career-ModalClose" type="button" onClick={closeModal} aria-label="Close">
                            ✕
                        </button>

                        <div className="Career-ModalHeader">
                            <Text textType="H3" color="Dark" weight="600">{selectedJob.title}</Text>
                            <Box className="Career-Chips">
                                <span className="Career-Chip Career-Chip--brand">{selectedJob.compensation}</span>
                                <span className="Career-Chip">{selectedJob.type}</span>
                                <span className="Career-Chip">{selectedJob.location}</span>
                            </Box>
                        </div>

                        <div className="Career-ModalBody">
                            <Box className="Career-ModalSection">
                                <Text textType="H4" color="Dark" weight="700">What you'll do</Text>
                                <Box className="Career-Bullets">
                                    {selectedJob.role.map((item) => (
                                        <span key={item}>• {item}</span>
                                    ))}
                                </Box>
                            </Box>

                            <Box className="Career-ModalSection">
                                <Text textType="H4" color="Dark" weight="700">Requirements</Text>
                                <Box className="Career-Bullets">
                                    {selectedJob.requirements.map((item) => (
                                        <span key={item}>• {item}</span>
                                    ))}
                                </Box>
                            </Box>

                            <Box className="Career-ModalSection">
                                <Text textType="H4" color="Dark" weight="700">Perks</Text>
                                <Box className="Career-Bullets">
                                    {selectedJob.perks.map((item) => (
                                        <span key={item}>✦ {item}</span>
                                    ))}
                                </Box>
                            </Box>
                        </div>

                        <div className="Career-ModalFooter">
                            <Button rounded="Bubble" className="Career-ApplyBtn">
                                <a
                                    style={{ color: 'white', textDecoration: 'none' }}
                                    href="https://forms.gle/aNwL5pAP3vosqNKG9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Apply
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    )
}

export default Career