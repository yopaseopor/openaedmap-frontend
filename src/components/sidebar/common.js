import { useTranslation } from 'react-i18next';


export function SpanNoData() {
    const { t } = useTranslation();

    return (
        <span className="has-text-grey-light is-italic has-text-weight-light">{t('sidebar.no_data')}</span>
    )
}
