'use client';

import React from 'react';
import { 
  Server, Layout, 
  ExternalLink, GitBranch, Mail, Terminal, Database, Award, Briefcase, GraduationCap
} from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* 상단 내비게이션 바 */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-slate-900 text-lg tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-600 animate-pulse"></span>
            조우진 <span className="text-slate-500 font-normal text-sm">· Cho Woo-jin</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-purple-600 transition">About</a>
            <a href="#skills" className="hover:text-purple-600 transition">Skills</a>
            <a href="#career" className="hover:text-purple-600 transition">Experience</a>
            <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full border-2 border-purple-600 overflow-hidden mb-6 bg-slate-100 shadow-xl shadow-purple-100">
            <img src="/profile.png" alt="조우진 프로필 사진" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
            조우진 <span className="text-xl text-slate-500 font-normal">· 2000년생 (만 26세)</span>
          </h1>
          <p className="text-xl text-purple-600 font-semibold mb-6">
            현장 ERP 운용 경험을 갖춘 풀스택 & 전산·데이터 관리 개발자
          </p>

          <blockquote className="max-w-2xl text-slate-600 italic mb-10 text-base md:text-lg leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
            &quot;데이터 자동화의 매력에서 시작해 대동병원 및 이도클럽디해운대 실무 ERP 운용을 거치며, 시스템의 무결성과 데이터 정합성을 지탱하는 개발자로 성장했습니다.&quot;
          </blockquote>

          {/* KPI 배지 4개 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-10">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-slate-900 mb-1">물류 1급</div>
              <div className="text-xs text-slate-500">ERP정보관리사 자격 보유</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-slate-900 mb-1">실무 4개월+</div>
              <div className="text-xs text-slate-500">대동병원 및 이도클럽디해운대 인턴</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-slate-900 mb-1">Busan ERP</div>
              <div className="text-xs text-slate-500">물류 SCM 시스템 단독 설계·배포</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-slate-900 mb-1">Connected_M</div>
              <div className="text-xs text-slate-500">AI 영화 추천 플랫폼 풀스택 구현</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition shadow-lg shadow-purple-600/20 flex items-center gap-2">
              코어 프로젝트 쇼케이스 보기 ↓
            </a>
            <a href="https://github.com/dnwls0022" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-50 text-slate-700 font-medium px-6 py-3 rounded-xl transition border border-slate-300 flex items-center gap-2 shadow-sm">
              <GitBranch className="w-5 h-5" /> GitHub 저장소 방문 ↗
            </a>
          </div>
        </div>
      </section>

      {/* 어바웃 미 섹션 */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="text-purple-600">#</span> About Me
        </h2>
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-6 text-slate-700 leading-relaxed shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            &quot;입력 전 선검토, 입력 후 재검증 — 2단계 크로스체크로 데이터 무결성을 완성합니다.&quot;
          </h3>
          <p>
            동명대학교 글로벌문화콘텐츠학과를 졸업 후, 대용량 데이터 처리와 매크로 자동화의 매력에 매료되어 개발자의 길을 걷게 되었습니다. 코리아AI아카데미에서 풀스택 개발 과정을 수료하며 Java, Spring Boot, React, MariaDB 기반의 웹 애플리케이션 아키텍처 설계 역량을 다졌습니다.
          </p>
          <p>
            대동병원 자산관리운영팀과 이도클럽디해운대 운영지원팀에서 근무하며 더존 iCUBE ERP를 활용해 수입 전표, 임직원 근태, 급여 및 4대보험, 자산 물류 데이터를 직접 전산 처리했습니다. 수기 장부와 전산 데이터 간의 2단계 크로스체크 검증 프로세스를 직접 수립·적용하여 오기입을 사전 차단하고 현업 데이터의 신뢰성을 확보한 실무 경험이 있습니다.
          </p>
          <div className="border-l-4 border-purple-600 bg-purple-50 p-4 rounded-r-xl text-sm text-purple-900">
            <strong>핵심 역량 요약:</strong> 현장 ERP 운용 감각과 풀스택 개발 능력을 겸비하여, 시스템 전반의 정합성을 지키고 예외 상황을 철저히 방어하는 든든한 개발 동반자가 되겠습니다.
          </div>
        </div>
      </section>

      {/* 스킬 섹션 */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <span className="text-purple-600">#</span> Skills & Technologies
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          * 기술 숙련도 수준: [상: 구조 설계 및 트러블슈팅 가능]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900">ERP & 비즈니스 프로세스</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>더존 iCUBE ERP (급여·근태·물류)</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>Excel 고급 함수 (XLOOKUP, VLOOKUP, 매크로)</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>2단계 크로스체크 데이터 검증 프로세스</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900">Back-end & Database</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>Java & Spring Boot (객체지향 설계)</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>MariaDB / MySQL (HeidiSQL 쿼리 최적화)</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>REST API 연동 및 예외 처리 로직</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Layout className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900">Front-end & Web</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>React / JavaScript (ES6+) / TypeScript</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>HTML / CSS / Tailwind CSS</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>사용자 중심 UI/UX 구현 및 발표</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900">Tools & DevOps</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>Git & GitHub (<code className="text-xs">dnwls0022</code>) 버전 관리</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>VS Code / DBeaver / HeidiSQL</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span>Vercel / Render 클라우드 배포</span>
                <span className="text-purple-700 font-semibold text-xs bg-purple-100 px-2 py-1 rounded">상</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 경력, 학력 및 자격증 섹션 */}
      <section id="career" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="text-purple-600">#</span> Experience, Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-purple-600 flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> Professional Experience
            </h3>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="text-xs text-purple-600 font-mono">2026.09 ~ 2026.11 (3개월)</div>
              <h4 className="text-base font-bold text-slate-900">이도클럽디해운대</h4>
              <p className="text-sm text-slate-600">운영지원팀 인턴</p>
              <p className="text-xs text-slate-500 leading-relaxed">더존 ERP 활용 급여·근태 데이터 전산화, 4대보험 서류 정합성 관리 및 크로스체크 검증 수행.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="text-xs text-purple-600 font-mono">2024.09 ~ 2024.12 (4개월)</div>
              <h4 className="text-base font-bold text-slate-900">대동병원</h4>
              <p className="text-sm text-slate-600">자산관리운영팀 인턴</p>
              <p className="text-xs text-slate-500 leading-relaxed">자산 및 의료물품 5개월분 입출고 내역서 전산화, 수기 내역과 전산 데이터 간 2단계 교차 검증.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-purple-600 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" /> Education & Training
            </h3>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm">
              <div className="space-y-3 text-sm">
                <div className="border-b border-slate-200 pb-3">
                  <div className="text-slate-900 font-medium">동명대학교 글로벌문화콘텐츠학과</div>
                  <div className="text-slate-500 text-xs">2018.03 ~ 2024.02 (학사 졸업)</div>
                </div>
                <div>
                  <div className="text-slate-900 font-medium">코리아AI아카데미 수료</div>
                  <div className="text-slate-500 text-xs">빅데이터 활용 실버케어테크 인지치료소프트웨어 개발 과정</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-purple-600 flex items-center gap-2">
              <Award className="w-5 h-5" /> Certifications
            </h3>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 text-sm shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="text-slate-900 font-medium">ERP정보관리사 물류 1급</span>
                <span className="text-slate-500 text-xs">2025.08</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="text-slate-900 font-medium">정보처리기사 필기</span>
                <span className="text-slate-500 text-xs">2025.08</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="text-slate-900 font-medium">컴퓨터활용능력 2급</span>
                <span className="text-slate-500 text-xs">2024.09</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-900 font-medium">ITQ 정보기술자격</span>
                <span className="text-slate-500 text-xs">2014.07</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 코어 프로젝트 쇼케이스 */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <span className="text-purple-600">#</span> Core Projects Showcase
        </h2>
        <p className="text-sm text-slate-500 mb-8">실무 역량과 트러블슈팅 경험을 담은 주요 프로젝트 포트폴리오입니다.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-300 transition shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">부산 물류 ERP (Busan Logistics ERP)</h3>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-mono">개인 프로젝트</span>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                기획·설계부터 Vercel/Render 클라우드 배포까지 전 과정 단독 수행. 안전재고 자동 알림, 입출고 상태 파이프라인, 배송 일정 캘린더 및 Google SMTP 기반 회원 인증·임시 비밀번호 발급 API 구현.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded">React</span>
                <span className="bg-white border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded">Spring Boot</span>
                <span className="bg-white border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded">MariaDB</span>
                <span className="bg-white border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded">SMTP API</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <a href="https://busan-logistics-erp-rbq5.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 font-medium">
                <ExternalLink className="w-4 h-4" /> Live Demo ↗
              </a>
              <a href="https://github.com/dnwls0022" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-slate-700 flex items-center gap-1 font-medium">
                <GitBranch className="w-4 h-4" /> GitHub ↗
              </a>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-300 transition shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">Connected_M (AI 영화 추천 플랫폼)</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-mono">팀 프로젝트</span>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                프론트엔드 UI 구현 및 최종 기술 발표 담당. HeidiSQL을 통한 MariaDB 데이터 정합성 검증 및 회원탈퇴/HTTP 500 에러 트러블슈팅 주도. 사용자 편의성 극대화로 호평 획득.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded">React</span>
                <span className="bg-white border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded">Spring Boot</span>
                <span className="bg-white border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded">MariaDB</span>
                <span className="bg-white border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded">AI API</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <a href="https://connected-m.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 font-medium">
                <ExternalLink className="w-4 h-4" /> Live Demo ↗
              </a>
              <a href="https://github.com/dnwls0022" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-slate-700 flex items-center gap-1 font-medium">
                <GitBranch className="w-4 h-4" /> GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 및 푸터 */}
      <footer id="contact" className="py-16 px-6 max-w-4xl mx-auto border-t border-slate-200 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Get In Touch</h2>
        <p className="text-slate-600 mb-6 text-sm">
          현장의 소리와 전산 시스템을 연결하는 든든한 개발자가 되겠습니다. 언제든 연락 주세요!
        </p>
        <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
          <a href="mailto:whdnwlszzz@naver.com" className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl text-slate-800 hover:border-purple-400 transition shadow-sm">
            <Mail className="w-5 h-5 text-purple-600" /> whdnwlszzz@naver.com
          </a>
          <a href="https://github.com/dnwls0022" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl text-slate-800 hover:border-purple-400 transition shadow-sm">
            <GitBranch className="w-5 h-5 text-purple-600" /> dnwls0022 (GitHub)
          </a>
          <a href="https://likeable-boater-858.notion.site/2a735a7d7e6c80ada71cc09387ddc98f" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl text-slate-800 hover:border-purple-400 transition shadow-sm">
            <ExternalLink className="w-5 h-5 text-purple-600" /> 노션 포트폴리오 ↗
          </a>
        </div>
        <p className="text-xs text-slate-400">
          © 2026 Cho Woo-jin. Built with Next.js & Tailwind CSS.
        </p>
      </footer>

    </div>
  );
}