import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation('sidebar');

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        {t('toggle', { ns: 'sidebar' })}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
      tttrr
    </div>
  );
}
