import "./App.css";

const evidenceRepo = "https://drive.google.com/drive/folders/19yAS8KOf9Cunvy0g9lohkrAs38d8NNaf?usp=drive_link";

const timeline = [
  {
    date: "Jan. 23, 2023",
    title: "Prior workplace assault",
    body:
      "A prior workplace assault became the foundation for later safety concerns about the possible return of the same individual to the workplace.",
  },
  {
    date: "Jan. 16, 2024",
    title: "Safety concerns raised to management",
    body:
      "Concerns about the prior assailant returning to work were raised with management, establishing employer knowledge of the safety issue.",
  },
  {
    date: "Sept. 16, 2024",
    title: "Immediate objection to possible rehire",
    body:
      "After being informed that the former employee might be rehired, a direct safety objection was made based on the earlier assault.",
  },
  {
    date: "Sept. 17, 2024",
    title: "Paid suspension",
    body:
      "The day after the safety objection and police-related incident, employment was placed on paid suspension.",
  },
  {
    date: "Oct. 1, 2024",
    title: "Termination",
    body:
      "Employment was terminated roughly two weeks after the safety concern was raised.",
  },
  {
    date: "Oct. 7, 2024",
    title: "OSHA complaint filed",
    body:
      "A whistleblower complaint was filed with OSHA under Section 11(c), alleging retaliation for protected safety-related activity.",
  },
  {
    date: "Sept. 26, 2025",
    title: "Regional dismissal",
    body:
      "OSHA concluded there was no reasonable cause to believe Section 11(c) was violated and accepted the employer's stated non-retaliatory explanation.",
  },
  {
    date: "Nov. 17, 2025",
    title: "Oversight concerns raised",
    body:
      "A formal oversight request asked that core video and affidavit evidence be preserved and reviewed as part of the record.",
  },
  {
    date: "Mar. 23, 2026",
    title: "Final agency closure",
    body:
      "The administrative track ended when the final agency determination affirmed the dismissal.",
  },
];

const evidence = [
  {
    title: "Timeline and chronology",
    items: [
      "Incident sequence from prior assault through final agency closure",
      "Dates of protected activity, suspension, termination, and review requests",
    ],
  },
  {
    title: "Video evidence",
    items: [
      "Prior workplace assault footage",
      "Sept. 16, 2024 incident footage and compliance-related recordings",
    ],
  },
  {
    title: "Employer statements",
    items: [
      "Affidavits submitted by Bluebird principals",
      "Respondent position statement filed during OSHA investigation",
    ],
  },
  {
    title: "Complainant rebuttal",
    items: [
      "Written rebuttal challenging the employer's account",
      "Argument that the record was incomplete or mischaracterized",
    ],
  },
  {
    title: "Agency record",
    items: [
      "OSHA findings and request-for-review history",
      "Oversight requests and final closure letter",
    ],
  },
];

const questions = [
  "Was a legitimate workplace safety concern raised about rehiring a prior assailant?",
  "Did the suspension and termination closely follow that protected activity?",
  "Did the administrative process evaluate the full evidentiary record, including video and contradictory statements?",
];

const contradictions = [
  {
    leftLabel: "Employer position",
    leftText:
      "Complainant acted aggressively, was insubordinate, and refused to comply, resulting in police involvement and termination.",
    rightLabel: "Complainant position",
    rightText:
      "Complainant asserts he remained compliant, requested written documentation, and that video evidence contradicts claims of aggression and refusal to leave.",
  },
  {
    leftLabel: "Employer position",
    leftText:
      "Termination was based solely on conduct and not related to any protected activity.",
    rightLabel: "Complainant position",
    rightText:
      "Timeline shows safety concern raised on Sept. 16, followed by suspension the next day and termination within two weeks, suggesting a causal link.",
  },
  {
    leftLabel: "OSHA finding",
    leftText:
      "No reasonable cause found; agency concluded conduct, not protected activity, led to termination.",
    rightLabel: "Complainant concern",
    rightText:
      "Concerns were raised that key evidence, including video and conflicting statements, may not have been fully evaluated during the administrative process.",
  },
];

const exhibits = [
  {
    title: "Exhibit 1 — Prior Workplace Assault Video",
    desc: "Video relating to the earlier workplace assault forming the basis of the safety concern.",
    link: "https://drive.google.com/file/d/1BY9SEbfT-xGOT8Zvwd7DFBwn-9mttLj6/view?usp=drive_link",
  },
  {
    title: "Exhibit 2 — Timeline of Events",
    desc: "Full chronology of events from assault through OSHA closure.",
    link: "https://drive.google.com/file/d/1GxG0P3hP7OGAkAhHQlw78HhtQa3jW-76/view?usp=drive_link",
  },
  {
    title: "Exhibit 3 — Sept. 16, 2024 Incident / Compliance Video",
    desc: "Video and related material showing the events of the safety objection and police interaction.",
    link: "https://drive.google.com/file/d/1GxG0P3hP7OGAkAhHQlw78HhtQa3jW-76/view?usp=drive_link",
  },
  {
    title: "Exhibit 4 — Affidavit of Victor DaRosa",
    desc: "Employer affidavit describing the Sept. 16, 2024 incident and company position.",
    link: "https://drive.google.com/file/d/1Q0H5u4UjDEE4BDxXFCC3q6Z5gnJxO-S1/view?usp=drive_link",
  },
  {
    title: "Exhibit 5 — Affidavit of Tony DaRosa",
    desc: "Employer affidavit describing termination rationale and alleged misconduct.",
    link: "https://drive.google.com/file/d/1QaAadsjpktYDzXSEYJAqvrmAn-6wG1wN/view?usp=drive_link",
  },
  {
    title: "Exhibit 6 — Respondent Position Statement",
    desc: "Bluebird Transportation's formal response to OSHA denying retaliation.",
    link: "https://drive.google.com/file/d/1yDhE6rbdZtSwN7YsPsR9uHdsZ3Ltampn/view?usp=drive_link",
  },
  {
    title: "Exhibit 7 — Complainant Rebuttal Statement",
    desc: "Written rebuttal disputing employer claims and asserting pretext.",
    link: "https://docs.google.com/document/d/1DWPMqZLutMd0saAplStHWMw8hG692qor/edit?usp=drive_link&ouid=102910109371075181517&rtpof=true&sd=true",
  },
  {
    title: "Exhibit 8 — OSHA Secretary’s Findings (Sept. 26, 2025)",
    desc: "Regional OSHA findings concluding no reasonable cause for violation.",
    link: "https://drive.google.com/file/d/1fT0Q_6WSQ1R2Rw-xtO7f-gqop-_oX7Sx/view?usp=drive_link",
  },
  {
    title: "Exhibit 9 — Status Request and Correspondence",
    desc: "Emails requesting updates and raising concerns about evidence handling.",
    link: "https://drive.google.com/file/d/17QG4XjoaYTGEF2CGJxudRrIY_dIntBQF/view?usp=drive_link",
  },
  {
    title: "Exhibit 10 — Final Closure Letter (Mar. 23, 2026)",
    desc: "Final OSHA determination closing the case.",
    link: "https://drive.google.com/file/d/1eugPd236njH-a30Z6_v6tm_IUp48spPP/view?usp=drive_link",
  },
];

function App() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="pill">Public case record</div>
          <h1>I raised a workplace safety concern. I was suspended the next day and fired two weeks later.</h1>
          <p className="lead">
            This site presents a documented timeline, the central dispute, and the evidentiary categories connected to the Bluebird Transportation whistleblower matter. It is intended as a structured public record for review by attorneys, journalists, advocates, and anyone assessing the facts.
          </p>
          <div className="actions">
            <a href={evidenceRepo} target="_blank" rel="noreferrer" className="button button-light">
              Open Evidence Repository
            </a>
            <div className="tag">Full evidentiary record available for review</div>
          </div>
          <div className="stats">
            <Stat label="Protected activity" value="Safety objection" />
            <Stat label="Adverse actions" value="Suspension + termination" />
            <Stat label="Agency outcome" value="Case closed" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <Card>
            <SectionTitle eyebrow="Overview" title="What this case is about" />
            <div className="copy">
              <p>
                The core issue is whether a documented safety concern about the possible return of a prior workplace assailant was followed by retaliation, or whether the employer&apos;s stated explanation of misconduct and insubordination was the true reason for suspension and termination.
              </p>
              <p>
                The public record presented here focuses on chronology, evidentiary categories, and procedural questions about whether the administrative review fully evaluated the available record.
              </p>
            </div>
          </Card>
          <Card>
            <SectionTitle eyebrow="Key question" title="The dispute in one sentence" />
            <p className="big-question">
              Did Bluebird Transportation terminate employment because of conduct, or because a workplace safety concern was raised about rehiring a prior assailant?
            </p>
          </Card>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle eyebrow="Timeline" title="Chronology of the matter" />
          <div className="timeline-grid">
            {timeline.map((item) => (
              <div key={`${item.date}-${item.title}`} className="timeline-card">
                <div className="timeline-date">{item.date}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Highlighted evidence" title="Key visual record" />
          <div className="grid-two">
            <div className="card">
              <div className="muted block-space">
                Exhibit Highlight — Compliance: Still frame showing the complainant exiting the premises after being directed to leave.
              </div>
              <a href="https://drive.google.com/file/d/1LtgXVbZJM6jOATPG2fa7JSE1JrMZYh0R/view?usp=drive_link" target="_blank" rel="noreferrer" className="button button-dark">
                View Compliance Still Frame
              </a>
            </div>
            <div className="card">
              <div className="muted block-space">
                Exhibit Highlight — Prior Assault: Still frame capturing the prior workplace incident referenced in the safety concern.
              </div>
              <a href="https://drive.google.com/file/d/1R3kbWyvcvhC-2XVXNHmDAD8uRgvEDpJH/view?usp=drive_link" target="_blank" rel="noreferrer" className="button button-dark">
                View Prior Assault Still Frame
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Evidence" title="Categories of supporting material" />
          <div className="grid-three">
            {evidence.map((block) => (
              <Card key={block.title}>
                <h3>{block.title}</h3>
                <ul className="list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <Card>
            <SectionTitle eyebrow="Review lens" title="Questions the record raises" />
            <div className="question-list">
              {questions.map((q) => (
                <div key={q} className="question-card">
                  {q}
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <SectionTitle eyebrow="For counsel" title="Attorney review invited" />
            <div className="copy">
              <p>
                If you are an employment or whistleblower attorney, the record includes a chronology, video evidence, employer affidavits, rebuttal materials, OSHA findings, oversight requests, and closure correspondence.
              </p>
              <p>
                This site is intended to make the case understandable at a glance and to preserve the central sequence of events in a single public-facing place.
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-name">Chris Lamontagne</div>
              <div>Complainant / Public Case Contact</div>
              <div>New Bedford, Massachusetts</div>
              <div>Email: lamontagne.biz@gmail.com</div>
            </div>
          </Card>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container">
          <SectionTitle eyebrow="Key contradictions" title="Points of dispute in the record" />
          <div className="grid-two">
            {contradictions.map((item, idx) => (
              <FragmentPair
                key={idx}
                leftLabel={item.leftLabel}
                leftText={item.leftText}
                rightLabel={item.rightLabel}
                rightText={item.rightText}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice">
            <SectionTitle eyebrow="Notice" title="Important context" />
            <div className="two-col copy">
              <p>
                This website presents a documented chronology and the complainant&apos;s position regarding disputed events. Employer statements and agency findings are part of the record and are acknowledged as such.
              </p>
              <p>
                The purpose of this site is transparency and review. It is not intended to substitute for formal legal process or to make unsupported allegations beyond the evidentiary record.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle eyebrow="Exhibits" title="Documented Record" />
          <div className="exhibit-list">
            {exhibits.map((exhibit) => (
              <Exhibit key={exhibit.title} title={exhibit.title} desc={exhibit.desc} link={exhibit.link} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FragmentPair({ leftLabel, leftText, rightLabel, rightText }) {
  return (
    <>
      <div className="card">
        <div className="label">{leftLabel}</div>
        <div className="card-copy">{leftText}</div>
      </div>
      <div className="card">
        <div className="label">{rightLabel}</div>
        <div className="card-copy">{rightText}</div>
      </div>
    </>
  );
}

function Exhibit({ title, desc, link }) {
  return (
    <div className="card exhibit-card">
      <div className="exhibit-title">{title}</div>
      <div className="card-copy">{desc}</div>
      <div className="block-space">
        <a href={link} target="_blank" rel="noreferrer" className="button button-dark">
          View Exhibit
        </a>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

export default App;
